import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { YouTube } from "@material-ui/icons";
import "./MusicTable.css";

class MusicTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      musicList: []
    };

    this.diffType = ["nm", "hd", "mx", "sc"];
    this.keyType = ["4k", "5k", "6k", "7k", "8k"];
  }

  // 初期値の設定
  componentWillMount() {
    this.fetchDjmaxtrMusicList();
  }

  // リストの更新
  fetchDjmaxtrMusicList() {
    fetch(
      "https://cdn.jsdelivr.net/gh/celclow/djmaxtr-music-list/djmaxtr_music_list.json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          musicList: res
        });
      });
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}>Title</TableCell>
              {this.keyType.map(key => (
                <TableCell key={key} colSpan={this.diffType.length}>
                  {key.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {this.keyType.map(key =>
                this.diffType.map(diff => (
                  <TableCell key={key + diff}>{diff.toUpperCase()}</TableCell>
                ))
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.musicList.map(music => (
              <TableRow>
                <TableCell key={music.id}>{music.title}</TableCell>

                {this.keyType.map(key =>
                  this.diffType.map(diff => (
                    <TableCell key={music.id + key + diff}>
                      {music[key][diff] && (
                        <a href={music[key][diff]}>
                          <YouTube className="youtube-enable" />
                        </a>
                      )}
                      {music[key][diff] === "" && (
                        <YouTube className="youtube-disable" />
                      )}
                      {music[key][diff] === null && ""}
                    </TableCell>
                  ))
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default MusicTable;
